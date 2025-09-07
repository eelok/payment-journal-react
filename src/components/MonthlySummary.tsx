import { useEffect, useState } from "react"
import { getPaymentSummary, MontlySummary } from "../services/paymentMonthlySummary";

export const MonthlySummary = () => {

    const [monthlySummaries, setMonthlySummaries] = useState<MontlySummary[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPaymentSummary()
        .then(data => setMonthlySummaries(data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, []);
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
                                    <p>{payment.amount}</p>
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