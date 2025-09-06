import axious from 'axios';

export interface Payment {
    id: number;
    amount: number;
    dateTime: string;
    description: string;
}

export interface MontlySummary {
    yearMonth: string;
    totalAmount: number;
    paymentCount: number;
    allPaymentsInMonth: Array<Payment>;
}

export const getPaymentSummary = async (): Promise<MontlySummary[]> => {
    try {
        const response = await axious.get<MontlySummary[]>("http://localhost:8080/api/v1/payments/monthly-summary");
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
}