import React from "react"

export const Table=()=>{
    return(
        <div >
            <h1>Table</h1>
            <table border={"1px"} className="tbl">
               <b> <tr>
                    <th>Employe Name</th>
                    <th>Employe Joining Date</th>
                    <th>Employe Salery</th>
                    <th>Employe Expriance</th>
                    <th>Employe age</th>
                </tr>
                <tr>
                    <td>Musaddiq</td>
                    <td>2020</td>
                    <td>100000</td>
                    <td>5 year expriance</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>Matin</td>
                    <td>2022</td>
                    <td>80000</td>
                    <td>3 year expriance</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>Zimad</td>
                    <td>2023</td>
                    <td>50000</td>
                    <td>1 year expriance</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>Ameer</td>
                    <td>2019</td>
                    <td>150000</td>
                    <td>7 year expriance</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>Arsalan</td>
                    <td>2021</td>
                    <td>180000</td>
                    <td>4 year expriance</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>Abdul Raheem</td>
                    <td>2022</td>
                    <td>85000</td>
                    <td>2.5 year expriance</td>
                    <td>30</td>
                </tr></b>
            </table>
        </div>
    )
}