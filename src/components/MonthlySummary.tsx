import { useEffect, useState } from "react"
import { getPaymentSummary, MontlySummary } from "../services/paymentMonthlySummary";
import { error } from "console";

export const MonthlySummary = () => {

    const [monthlySummaries, setMonthlySummaries] = useState<MontlySummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();

    useEffect(() => {
        getPaymentSummary()
        .then(data => setMonthlySummaries(data))
        .catch(error => setError("Failed to load data. Check the backend"))
        .finally(() => setLoading(false));
    }, []);

    if(loading) {
        return <div>Loading the data ....</div>
    }
    if(error) {
        return<div style={{color: 'red'}}>Error: {error}</div>
    }
    return (
        <div>        
            <h1>Payment Journal</h1>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Payments</th>
                        <th>Number Of Payment</th>
                        <th>Paied in total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        monthlySummaries.map(summary => (
                            <tr key={summary.yearMonth}>
                                <td>{summary.yearMonth}</td>
                                <td>{summary.allPaymentsInMonth.map(payment => (
                                    <p key={payment.id}>{payment.amount}</p>
                                ))}
                                </td>
                                <td>{summary.paymentCount}</td>
                                <td>{summary.totalAmount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}