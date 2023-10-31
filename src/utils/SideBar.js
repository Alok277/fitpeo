import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ViewCompactAltIcon from '@mui/icons-material/ViewCompactAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { TbSquareKey } from 'react-icons/tb';
import Icon from '@mdi/react';
import { mdiSaleOutline  } from '@mdi/js';

export const SideBarAssets = [
  { icon: <TbSquareKey size={17}/> , text: "Dashboard" },
  { icon: <ViewCompactAltIcon  fontSize="20px"/>, text: "Product" },
  { icon: <AccountBoxOutlinedIcon fontSize="20px" />, text: "Customers" },
  { icon: <AccountBalanceWalletIcon fontSize="20px" />, text: "Income" },
  { icon: <Icon path={mdiSaleOutline } fontSize="20px" size={0.66} />, text: "Promote" },
  { icon: <LiveHelpOutlinedIcon fontSize="20px" />, text: "Help" } 
];

