import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart } from '../../store/cart';

export const Cart = () => {

    const cartItems = useSelector(selectCart);

    return (
        <Styles>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </Styles>
            );
            }

            // const Styles = styled.div`
            // padding: 1rem;
            
            // table {
            //     border-spacing: 0;
            //     border-bottom: 2px solid #007042;
                
            //     thead {
            //         background-color: #F5F5F5;
            //         color: #007042;
            //         font-weight: bold;
            //         font-size: 1rem;
            //     }

            //     tr {
            //     :last-child {
            //         td {
            //         border-bottom: 0;
            //         }
            //     }
            //     }
            
            //     th,
            //     td {
            //     margin: 0;
            //     padding: 1rem;
            //     border-right: none;
            
            //     :last-child {
            //         border-right: 0;
            //     }
            //     }
            // }
            // `