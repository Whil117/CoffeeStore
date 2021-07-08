import styled from "@emotion/styled";

export const CoffeeBox = styled.div`
    width: 443px;
    height: 205px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin:10px;
    div{
        padding:10px;
        margin: 0 20px 0 0 ;
        ul{
            display: flex;
            flex-direction: column;
            height: 100px;
            justify-content: space-between;
            li{
                list-style: none;
            }
        }
    }
`
export const CoffeeOrders = styled.div`
    font-family: Inter;
    margin: 10px;
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
    flex-wrap: wrap;
    }

`