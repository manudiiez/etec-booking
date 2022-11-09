import React from 'react'
import useFetch from '../../hooks/useFetch'
import styled from 'styled-components';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ItemWidgetContainer = () => {
    const { data, loading, reFetch } = useFetch(`/chart/count`);
    console.log(data)

    return (
        <Container>
            <div className="widget">
                {
                    loading ? (
                        <p>Loading...</p>
                    ):(
                        <div className="widget__content">
                            <div className="left">
                                <span className="title">{data[0]?.title}</span>
                                <span className="counter">
                                {data[0]?.count}
                                </span>
                                <span className="link">Ver</span>
                            </div>
                            <div className="right">
                            <PersonOutlinedIcon
                                className="icon"
                                style={{
                                color: "crimson",
                                backgroundColor: "rgba(255, 0, 0, 0.2)",
                                }}
                            />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="widget">
                {
                    loading ? (
                        <p>Loading...</p>
                    ):(
                        <div className="widget__content">
                            <div className="left">
                                <span className="title">{data[1]?.title}</span>
                                <span className="counter">
                                {data[1]?.count}
                                </span>
                                <span className="link">Ver</span>
                            </div>
                            <div className="right">
                            <BusinessIcon
                                className="icon"
                                style={{
                                color: "goldenrod",
                                backgroundColor: "rgba(218, 165, 32, 0.2)",
                                }}
                            />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="widget">
                {
                    loading ? (
                        <p>Loading...</p>
                    ):(
                        <div className="widget__content">
                            <div className="left">
                                <span className="title">{data[2]?.title}</span>
                                <span className="counter">
                                {data[2]?.count}
                                </span>
                                <span className="link">Ver</span>
                            </div>
                            <div className="right">
                            <CalendarMonthIcon
                                className="icon"
                                style={{
                                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                                    color: "purple",
                                }}
                            />
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}

export default ItemWidgetContainer

const Container = styled.div`
    display: flex;
    padding: 20px;
    gap: 20px;
    .widget{
        
        flex: 1;
        padding: 10px;
        -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
        box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
        border-radius: 10px;
        height: 100px;
        .widget__content{
            display: flex;
            justify-content: space-between;
            height: 100%;
            .left,
            .right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .title {
                font-weight: bold;
                font-size: 14px;
                color: rgb(160, 160, 160);
                }

                .counter {
                font-size: 28px;
                font-weight: 300;
                }

                .link {
                width: max-content;
                font-size: 12px;
                border-bottom: 1px solid gray;
                }

                .percentage {
                display: flex;
                align-items: center;
                font-size: 14px;

                &.positive {
                    color: green;
                }
                &.negative {
                    color: red;
                }
                }

                .icon {
                font-size: 18px;
                padding: 5px;
                border-radius: 5px;
                align-self: flex-end;
                }
            }

        }
    }
`