import { Box, Container, Link, Paper, Stack, styled } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const OrderSuccess: React.FC = () => {
    const Item = styled(Paper)(({ theme }) => ({
        
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        border: 0
        
      }));
return (
<Container maxWidth="sm" sx={{justifyContent: "center"}}>
    
    <Box sx={{ width: '100%' }}>
      <Stack>
        <Item><p className="order-success-msg">Thank you for your order</p></Item>
        <Item className="custom-container">
        <img src={require("../../assets/images/panda-service.png")} alt="Order delivery status" />
        </Item>
        <Item><p>Your order will be delivered in 2 days</p></Item>
        <Item><Link>Click here to view the order details</Link></Item>
      </Stack>
    </Box>
    
    
</Container>
)
}

export default OrderSuccess;