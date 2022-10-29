import { useRouter } from 'next/router';
import React, { useEffect } from 'react'


const SubmissionComponent = () => {
    const { push } = useRouter();
    const redirectAgain = () => {
        localStorage.removeItem("answer");
        setTimeout(() => {
            push(`/survey/question/1`)
        }, 5000)

    }

    useEffect(() => {
        redirectAgain();
    }, [])
    return (
        <div style={{ height: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh", width: "40vw", background: "rgb(153, 191, 235)", borderRadius: "5%" }}>
                <h1>Thank You For Response</h1>
            </div>
        </div>
    )
}

export default SubmissionComponent