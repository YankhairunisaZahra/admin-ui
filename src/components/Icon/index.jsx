const IconWrapper = ({ children }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const OverviewIcon = () => (
  <IconWrapper>
    <path
      d="M21 14H14V21H21V14Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14H3V21H10V14Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 3H14V10H21V3Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 3H3V10H10V3Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const BalanceIcon = () => (
  <IconWrapper>
    <path
      d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 6V18C4 19.1 4.9 20 6 20H20V16"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const TransactionIcon = () => (
  <IconWrapper>
    <path
      d="M17 11L21 7L17 3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 7H9"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 21L3 17L7 13"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 17H3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </IconWrapper>
);

const BillIcon = () => (
  <IconWrapper>
    <path d="M9.50001 10.5001H12C12.2652 10.5001 12.5196 10.3947 12.7071 10.2072C12.8947 10.0196 13 9.76528 13 9.50007C13 9.23485 12.8947 8.9805 12.7071 8.79296C12.5196 8.60543 12.2652 8.50007 12 8.50007H11V8.00007C11 7.73485 10.8947 7.4805 10.7071 7.29296C10.5196 7.10543 10.2652 7.00007 10 7.00007C9.73479 7.00007 9.48044 7.10543 9.2929 7.29296C9.10537 7.4805 9.00001 7.73485 9.00001 8.00007V8.55007C8.39243 8.67344 7.85237 9.01817 7.48466 9.51733C7.11696 10.0165 6.94785 10.6345 7.01015 11.2513C7.07246 11.8682 7.36174 12.4398 7.82184 12.8554C8.28194 13.2709 8.88003 13.5007 9.50001 13.5001H10.5C10.6326 13.5001 10.7598 13.5527 10.8536 13.6465C10.9473 13.7403 11 13.8675 11 14.0001C11 14.1327 10.9473 14.2599 10.8536 14.3536C10.7598 14.4474 10.6326 14.5001 10.5 14.5001H8.00001C7.73479 14.5001 7.48044 14.6054 7.2929 14.793C7.10537 14.9805 7.00001 15.2349 7.00001 15.5001C7.00001 15.7653 7.10537 16.0196 7.2929 16.2072C7.48044 16.3947 7.73479 16.5001 8.00001 16.5001H9.00001V17.0001C9.00001 17.2653 9.10537 17.5196 9.2929 17.7072C9.48044 17.8947 9.73479 18.0001 10 18.0001C10.2652 18.0001 10.5196 17.8947 10.7071 17.7072C10.8947 17.5196 11 17.2653 11 17.0001V16.4501C11.6076 16.3267 12.1476 15.982 12.5154 15.4828C12.8831 14.9836 13.0522 14.3657 12.9899 13.7488C12.9276 13.132 12.6383 12.5603 12.1782 12.1448C11.7181 11.7292 11.12 11.4994 10.5 11.5001H9.50001C9.3674 11.5001 9.24022 11.4474 9.14645 11.3536C9.05269 11.2599 9.00001 11.1327 9.00001 11.0001C9.00001 10.8675 9.05269 10.7403 9.14645 10.6465C9.24022 10.5527 9.3674 10.5001 9.50001 10.5001ZM21 12.0001H18V3.00007C18.0007 2.82386 17.9548 2.65059 17.867 2.49781C17.7792 2.34504 17.6526 2.21817 17.5 2.13007C17.348 2.0423 17.1755 1.99609 17 1.99609C16.8245 1.99609 16.652 2.0423 16.5 2.13007L13.5 3.85007L10.5 2.13007C10.348 2.0423 10.1755 1.99609 10 1.99609C9.82447 1.99609 9.65203 2.0423 9.50001 2.13007L6.50001 3.85007L3.50001 2.13007C3.34799 2.0423 3.17554 1.99609 3.00001 1.99609C2.82447 1.99609 2.65203 2.0423 2.50001 2.13007C2.3474 2.21817 2.22079 2.34504 2.13299 2.49781C2.04518 2.65059 1.99931 2.82386 2.00001 3.00007V19.0001C2.00001 19.7957 2.31608 20.5588 2.87869 21.1214C3.4413 21.684 4.20436 22.0001 5.00001 22.0001H19C19.7957 22.0001 20.5587 21.684 21.1213 21.1214C21.6839 20.5588 22 19.7957 22 19.0001V13.0001C22 12.7349 21.8947 12.4805 21.7071 12.293C21.5196 12.1054 21.2652 12.0001 21 12.0001ZM5.00001 20.0001C4.73479 20.0001 4.48044 19.8947 4.2929 19.7072C4.10536 19.5196 4.00001 19.2653 4.00001 19.0001V4.73007L6.00001 5.87007C6.15435 5.95068 6.32589 5.99278 6.50001 5.99278C6.67413 5.99278 6.84567 5.95068 7.00001 5.87007L10 4.15007L13 5.87007C13.1543 5.95068 13.3259 5.99278 13.5 5.99278C13.6741 5.99278 13.8457 5.95068 14 5.87007L16 4.73007V19.0001C16.0027 19.3412 16.0636 19.6794 16.18 20.0001H5.00001ZM20 19.0001C20 19.2653 19.8947 19.5196 19.7071 19.7072C19.5196 19.8947 19.2652 20.0001 19 20.0001C18.7348 20.0001 18.4804 19.8947 18.2929 19.7072C18.1054 19.5196 18 19.2653 18 19.0001V14.0001H20V19.0001Z" fill="white"/>
  </IconWrapper>
);

const ExpensesIcon = () => (
  <IconWrapper>
      <path d="M15.5 17H21.5M21.5 17L19 19.5M21.5 17L19 14.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.5 13V5C21.5 4.60218 21.342 4.22064 21.0607 3.93934C20.7794 3.65804 20.3978 3.5 20 3.5H4C3.60218 3.5 3.22064 3.65804 2.93934 3.93934C2.65804 4.22064 2.5 4.60218 2.5 5V19C2.5 19.3978 2.65804 19.7794 2.93934 20.0607C3.22064 20.342 3.60218 20.5 4 20.5H14.235" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 8.5H8.75C8.28587 8.5 7.84075 8.68437 7.51256 9.01256C7.18437 9.34075 7 9.78587 7 10.25C7 10.7141 7.18437 11.1592 7.51256 11.4874C7.84075 11.8156 8.28587 12 8.75 12H11.25C11.7141 12 12.1592 12.1844 12.4874 12.5126C12.8156 12.8408 13 13.2859 13 13.75C13 14.2141 12.8156 14.6592 12.4874 14.9874C12.1592 15.3156 11.7141 15.5 11.25 15.5H7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </IconWrapper>
);

const GoalsIcon = () => (
  <IconWrapper>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 12H18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6 12H2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 6V2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 22V18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </IconWrapper>
);

const SettingsIcon = () => (
  <IconWrapper>
      <path d="M11.9999 14.3465C13.2959 14.3465 14.3465 13.2959 14.3465 11.9999C14.3465 10.7039 13.2959 9.65332 11.9999 9.65332C10.7039 9.65332 9.65332 10.7039 9.65332 11.9999C9.65332 13.2959 10.7039 14.3465 11.9999 14.3465Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.0545 14.4545C17.9456 14.7013 17.9131 14.9751 17.9613 15.2405C18.0094 15.5059 18.1359 15.7508 18.3245 15.9436L18.3736 15.9927C18.5258 16.1447 18.6465 16.3252 18.7288 16.5238C18.8112 16.7225 18.8536 16.9354 18.8536 17.1505C18.8536 17.3655 18.8112 17.5784 18.7288 17.7771C18.6465 17.9757 18.5258 18.1562 18.3736 18.3082C18.2217 18.4603 18.0412 18.581 17.8425 18.6634C17.6439 18.7457 17.431 18.7881 17.2159 18.7881C17.0009 18.7881 16.7879 18.7457 16.5893 18.6634C16.3906 18.581 16.2102 18.4603 16.0582 18.3082L16.0091 18.2591C15.8163 18.0705 15.5714 17.9439 15.3059 17.8958C15.0405 17.8477 14.7668 17.8802 14.52 17.9891C14.278 18.0928 14.0716 18.265 13.9263 18.4845C13.7809 18.704 13.7029 18.9613 13.7018 19.2245V19.3636C13.7018 19.7976 13.5294 20.2138 13.2225 20.5207C12.9157 20.8276 12.4994 21 12.0655 21C11.6315 21 11.2152 20.8276 10.9084 20.5207C10.6015 20.2138 10.4291 19.7976 10.4291 19.3636V19.29C10.4228 19.0192 10.3351 18.7565 10.1775 18.5362C10.0199 18.3159 9.79969 18.1481 9.54545 18.0545C9.29868 17.9456 9.02493 17.9131 8.75952 17.9613C8.4941 18.0094 8.24919 18.1359 8.05636 18.3245L8.00727 18.3736C7.8553 18.5258 7.67483 18.6465 7.47617 18.7288C7.27752 18.8112 7.06459 18.8536 6.84955 18.8536C6.6345 18.8536 6.42157 18.8112 6.22292 18.7288C6.02426 18.6465 5.84379 18.5258 5.69182 18.3736C5.53967 18.2217 5.41898 18.0412 5.33663 17.8425C5.25428 17.6439 5.21189 17.431 5.21189 17.2159C5.21189 17.0009 5.25428 16.7879 5.33663 16.5893C5.41898 16.3906 5.53967 16.2102 5.69182 16.0582L5.74091 16.0091C5.92953 15.8163 6.05606 15.5714 6.10419 15.3059C6.15231 15.0405 6.11982 14.7668 6.01091 14.52C5.90719 14.278 5.73498 14.0716 5.51547 13.9263C5.29596 13.7809 5.03873 13.7029 4.77545 13.7018H4.63636C4.20237 13.7018 3.78616 13.5294 3.47928 13.2225C3.1724 12.9157 3 12.4994 3 12.0655C3 11.6315 3.1724 11.2152 3.47928 10.9084C3.78616 10.6015 4.20237 10.4291 4.63636 10.4291H4.71C4.98081 10.4228 5.24346 10.3351 5.46379 10.1775C5.68412 10.0199 5.85195 9.79969 5.94545 9.54545C6.05437 9.29868 6.08686 9.02493 6.03873 8.75952C5.99061 8.4941 5.86408 8.24919 5.67545 8.05636L5.62636 8.00727C5.47422 7.8553 5.35352 7.67483 5.27118 7.47617C5.18883 7.27752 5.14644 7.06459 5.14644 6.84955C5.14644 6.6345 5.18883 6.42157 5.27118 6.22292C5.35352 6.02426 5.47422 5.84379 5.62636 5.69182C5.77834 5.53967 5.95881 5.41898 6.15746 5.33663C6.35611 5.25428 6.56905 5.21189 6.78409 5.21189C6.99913 5.21189 7.21207 5.25428 7.41072 5.33663C7.60937 5.41898 7.78984 5.53967 7.94182 5.69182L7.99091 5.74091C8.18374 5.92953 8.42865 6.05606 8.69406 6.10419C8.95948 6.15231 9.23322 6.11982 9.48 6.01091H9.54545C9.78745 5.90719 9.99383 5.73498 10.1392 5.51547C10.2846 5.29596 10.3626 5.03873 10.3636 4.77545V4.63636C10.3636 4.20237 10.536 3.78616 10.8429 3.47928C11.1498 3.1724 11.566 3 12 3C12.434 3 12.8502 3.1724 13.1571 3.47928C13.464 3.78616 13.6364 4.20237 13.6364 4.63636V4.71C13.6374 4.97328 13.7154 5.23051 13.8608 5.45002C14.0062 5.66953 14.2126 5.84174 14.4545 5.94545C14.7013 6.05437 14.9751 6.08686 15.2405 6.03873C15.5059 5.99061 15.7508 5.86408 15.9436 5.67545L15.9927 5.62636C16.1447 5.47422 16.3252 5.35352 16.5238 5.27118C16.7225 5.18883 16.9354 5.14644 17.1505 5.14644C17.3655 5.14644 17.5784 5.18883 17.7771 5.27118C17.9757 5.35352 18.1562 5.47422 18.3082 5.62636C18.4603 5.77834 18.581 5.95881 18.6634 6.15746C18.7457 6.35611 18.7881 6.56905 18.7881 6.78409C18.7881 6.99913 18.7457 7.21207 18.6634 7.41072C18.581 7.60937 18.4603 7.78984 18.3082 7.94182L18.2591 7.99091C18.0705 8.18374 17.9439 8.42865 17.8958 8.69406C17.8477 8.95948 17.8802 9.23322 17.9891 9.48V9.54545C18.0928 9.78745 18.265 9.99383 18.4845 10.1392C18.704 10.2846 18.9613 10.3626 19.2245 10.3636H19.3636C19.7976 10.3636 20.2138 10.536 20.5207 10.8429C20.8276 11.1498 21 11.566 21 12C21 12.434 20.8276 12.8502 20.5207 13.1571C20.2138 13.464 19.7976 13.6364 19.3636 13.6364H19.29C19.0267 13.6374 18.7695 13.7154 18.55 13.8608C18.3305 14.0062 18.1583 14.2126 18.0545 14.4545V14.4545Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </IconWrapper>
);

const LogoutIcon = () => (
  <IconWrapper>
      <path d="M8.3335 14.1663L12.5002 9.99967L8.3335 5.83301" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 10H2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </IconWrapper>
);

const KebabMenuIcon = () => (
  <IconWrapper>
      <circle cx="2" cy="2" r="2" fill="currentColor"/>
      <circle cx="2" cy="10" r="2" fill="currentColor"/>
      <circle cx="2" cy="18" r="2" fill="currentColor"/>
  </IconWrapper>
);

const GameIcon = () => (
  <IconWrapper>
    <path d="M6 11H10" stroke="#666666" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 9V13" stroke="#666666" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12H15.01" stroke="#666666" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 10H18.01" stroke="#666666" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.32 5H6.68C5.69028 5.00023 4.73579 5.36738 4.00103 6.03046C3.26628 6.69355 2.80345 7.60549 
    2.702 8.59C2.696 8.642 2.692 8.691 2.685 8.742C2.604 9.416 2 14.456 2 16C2 16.7956 2.31607 17.5587 2.87868 
    18.1213C3.44129 18.6839 4.20435 19 5 19C6 19 6.5 18.5 7 18L8.414 16.586C8.78899 16.2109 9.29761 16.0001 9.828 
    16H14.172C14.7024 16.0001 15.211 16.2109 15.586 16.586L17 18C17.5 18.5 18 19 19 19C19.7956 19 20.5587 18.6839 
    21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16C22 14.455 21.396 9.416 21.315 8.742C21.308 8.692 21.304 8.642 
    21.298 8.591C21.1968 7.60631 20.7341 6.69413 19.9993 
    6.03083C19.2645 5.36754 18.3099 5.00026 17.32 5Z" stroke="#666666" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
)
const ShoppingIcon = () => (
  <IconWrapper>
    <path d="M6 22C5.45 22 4.979 21.804 4.587 21.412C4.195 21.02 3.99934 20.5493 4 20V8C4 7.45 4.196 6.979 4.588 6.587C4.98
    6.195 5.45067 5.99933 6 6H8C8 4.9 8.39167 3.95833 9.175 3.175C9.95834 2.39167 10.9 2 12 2C13.1 2 14.0417 2.39167 14.825
    3.175C15.6083 3.95833 16 4.9 16 6H18C18.55 6 19.021 6.196 19.413 6.588C19.805 6.98 20.0007 7.45067 20 8V20C20 20.55 19.804
    21.021 19.412 21.413C19.02 21.805 18.5493 22.0007 18 22H6ZM6 20H18V8H16V10C16 10.2833 15.904 10.521 15.712 10.713C15.52 
    10.905 15.2827 11.0007 15 11C14.7167 11 14.479 10.904 14.287 10.712C14.095 10.52 13.9993 10.2827 14 10V8H10V10C10 10.2833 
    9.904 10.521 9.712 10.713C9.52 10.905 9.28267 11.0007 9 11C8.71667 11 8.479 10.904 8.287 10.712C8.095 10.52 7.99934 10.2827 
    8 10V8H6V20ZM10 6H14C14 5.45 13.804 4.979 13.412 4.587C13.02 4.195 12.5493 3.99933 12 4C11.45 4 10.979 4.196 10.587 4.588C10.195
    4.98 9.99934 5.45067 10 6Z" fill="#666666"/>
  </IconWrapper>
);

const FoodIcon = () => (
  <IconWrapper>
    <path d="M12 4.77778L18.75 9.77778V19.7778H5.25V9.77778L12 4.77778ZM12 2L3 8.66667V22H21V8.66667L12 2ZM11.4375 
    9.22222V12.5556H10.875V9.22222H9.75V12.5556H9.1875V9.22222H8.0625V12.5556C8.0625 13.4778 8.81625 14.2222 9.75 
    14.2222V18.6667H10.875V14.2222C11.8088 14.2222 12.5625 13.4778 12.5625 12.5556V9.22222H11.4375ZM13.125 
    11.4444V14.7778H14.25V18.6667H15.375V9.22222C14.1375 9.22222 13.125 10.2222 13.125 11.4444Z" fill="#666666"/>
  </IconWrapper>
);

const TransportationIcon = () => (
  <IconWrapper>
    <path d="M10 22V15.65L11.625 11H20.375L22 15.65V22H20V20.5H12V22H10ZM12 14.5H20L19.3 12.5H12.7L12 14.5ZM13 
    18.5C13.2833 18.5 13.521 18.404 13.713 18.212C13.9043 18.0207 14 17.7833 14 17.5C14 17.2167 13.9043 16.9793 
    13.713 16.788C13.521 16.596 13.2833 16.5 13 16.5C12.7167 16.5 12.4793 16.596 12.288 16.788C12.096 16.9793
    12 17.2167 12 17.5C12 17.7833 12.096 18.0207 12.288 18.212C12.4793 18.404 12.7167 18.5 13 18.5ZM19 18.5C19.2833 
    18.5 19.5207 18.404 19.712 18.212C19.904 18.0207 20 17.7833 20 17.5C20 17.2167 19.904 16.9793 19.712 16.788C19.5207 
    16.596 19.2833 16.5 19 16.5C18.7167 16.5 18.4793 16.596 18.288 16.788C18.096 16.9793 18 17.2167 18 17.5C18 17.7833 
    18.096 18.0207 18.288 18.212C18.4793 18.404 18.7167 18.5 19 18.5ZM6 14V12H8V14H6ZM11 
    8V6H13V8H11ZM6 18V16H8V18H6ZM6 22V20H8V22H6ZM2 22V8H7V2H17V9H15V4H9V10H4V22H2ZM11.5 19H20.5V16H11.5V19Z" fill="#666666"/>
  </IconWrapper>
);

const OthersIcon = () => (
  <IconWrapper>
    <path d="M13 9V3H21V9H13ZM3 13V3H11V13H3ZM13 21V11H21V21H13ZM3 21V15H11V21H3ZM5 11H9V5H5V11ZM15 
    19H19V13H15V19ZM15 7H19V5H15V7ZM5 19H9V17H5V19Z" fill="#878787"/>
  </IconWrapper>
);

const EntertaimentIcon = () => (
  <IconWrapper>
    <path d="M14.75 7.45999L12 3.92999L13.97 3.53999L16.71 7.06999L14.75 7.45999ZM21.62 6.09999L20.84 2.17999L16.91 
    2.95999L19.65 6.49999L21.62 6.09999ZM11.81 8.04999L9.07001 4.49999L7.10001 4.90999L9.85001 8.43999L11.81 8.04999ZM4.16001
    5.49999L3.18001 5.68999C2.92241 5.74079 2.67737 5.84194 2.45894 5.98764C2.24051 6.13334 2.05299 6.32072 1.90713 6.53904C1.76127 
    6.75737 1.65994 7.00234 1.60896 7.2599C1.55797 7.51747 1.55833 7.78257 1.61001 8.03999L2.00001 9.99999L6.90001 9.02999L4.16001 
    5.49999ZM4.00001 20V12H20V13.09C20.72 13.21 21.39 13.46 22 13.81V9.99999H2.00001V20C2.00001 20.5304 2.21073 21.0391 2.5858 
    21.4142C2.96087 21.7893 3.46958 22 4.00001 22H13.81C13.46 21.39 13.22 20.72 13.09 20H4.00001ZM21.34 15.84L17.75 
    19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z" fill="#878787"/>
  </IconWrapper>
);

const HousingIcon = () => (
  <IconWrapper>
    <path d="M10.3333 5V6.78421L12 7.83421V6.57895H20.3333V18.4211H16.1667V20H22V5H10.3333ZM8.25 7.36842L2 
    11.3158V20H14.5V11.3158L8.25 7.36842ZM13.6667 8.15789V8.89211L15.0083 9.73684H15.3333V8.15789H13.6667ZM17 
    8.15789V9.73684H18.6667V8.15789H17ZM8.25 9.34211L12.8333 12.1053V18.4211H10.3333V13.6842H6.16667V18.4211H3.66667V12.1053L8.25 9.34211ZM17 
    11.3158V12.8947H18.6667V11.3158H17ZM17 14.4737V16.0526H18.6667V14.4737H17Z" fill="#878787"/>
  </IconWrapper>
);

const ArrowUpIcon = () => (
  <IconWrapper>
    <path d="M8 12.6667V3.33334" stroke="#E73D1C" stroke-width="1.5" strokelinecap="round" strokeLinejoin="round"/>
    <path d="M3.33334 8.00001L8.00001 3.33334L12.6667 8.00001" stroke="#E73D1C" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

const ArrowDownIcon = () => (
  <IconWrapper>
    <path d="M8 2.33325V11.6666" stroke="#4DAF6E" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.6666 7L7.99992 11.6667L3.33325 7" stroke="#4DAF6E" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

const ArrowRightIcon = () => (
  <IconWrapper>
    <path d="M3 12L22 12" stroke="#9F9F9F" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 5L22 12L15 19" stroke="#9F9F9F" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

const EditIcon = () => (
  <IconWrapper>
    <path d="M16 21.3333H22" stroke="#525256" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 10.3333C19.2652 10.0681 19.6249 9.91913 20 9.91913C20.1857 9.91913 20.3696 9.95571 20.5412 
    10.0268C20.7128 10.0978 20.8687 10.202 21 10.3333C21.1313 10.4647 21.2355 10.6206 21.3066 10.7921C21.3776 
    10.9637 21.4142 11.1476 21.4142 11.3333C21.4142 11.5191 21.3776 11.703 21.3066 11.8745C21.2355 12.0461 21.1313 
    12.202 21 12.3333L12.6667 20.6667L10 21.3333L10.6667 18.6667L19 10.3333Z" 
    stroke="#525256" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </IconWrapper>
);

const AwardIcon = () => (
  <IconWrapper>
    <path d="M18.5833 4H5.41667C5.04094 4 4.68061 4.15223 4.41493 4.42319C4.14926 4.69416 4 5.06167 4 5.44487V9.62736C4.00035 9.90501 4.07914 10.1767 
    4.22692 10.4099C4.37471 10.643 4.58525 10.8279 4.83333 10.9422L10.05 13.3602C9.27758 13.8011 8.67035 14.4908 8.32341 15.3213C7.97647 16.1518 7.90942 
    17.0762 8.13277 17.9498C8.35612 18.8233 8.85724 19.5966 9.55765 20.1486C10.2581 20.7006 11.1182 21 12.0033 21C12.8885 21 13.7486 20.7006 14.449 20.1486C15.1494 
    19.5966 15.6505 18.8233 15.8739 17.9498C16.0972 17.0762 16.0302 16.1518 15.6833 15.3213C15.3363 14.4908 14.7291 13.8011 13.9567 13.3602L19.1667 10.9422C19.4148 10.8279 
    19.6253 10.643 19.7731 10.4099C19.9209 10.1767 19.9996 9.90501 20 9.62736V5.44487C20 5.06167 19.8507 4.69416 19.5851 4.42319C19.3194 4.15223 18.9591 4 18.5833 4ZM14.6667 
    5.35988V11.5363L12 12.7721L9.33333 11.5363V5.35988H14.6667ZM5.33333 9.62736V5.44487C5.33333 5.42233 5.34211 5.40071 5.35774 5.38477C5.37337 5.36884 5.39457 5.35988 5.41667 
    5.35988H8V10.9175L5.3825 9.7047C5.36788 9.698 5.35546 9.68713 5.34674 9.67342C5.33802 9.6597 5.33337 9.64371 5.33333 9.62736ZM12 19.6386C11.4726 19.6386 10.957 19.4791 10.5185 
    19.1803C10.0799 18.8814 9.73815 18.4566 9.53632 17.9597C9.33449 17.4627 9.28168 16.9158 9.38457 16.3883C9.48747 15.8607 9.74144 15.3761 10.1144 14.9957C10.4873 14.6153 10.9625
     14.3563 11.4798 14.2514C11.997 14.1464 12.5332 14.2003 13.0205 14.4061C13.5078 14.612 13.9242 14.9606 14.2173 15.4078C14.5103 15.8551 14.6667 16.3809 14.6667 16.9189C14.6667 
     17.6402 14.3857 18.332 13.8856 18.842C13.3855 19.3521 12.7072 19.6386 12 19.6386ZM18.6667 9.62736C18.6666 9.64371 18.662 9.6597 18.6533 9.67342C18.6445 9.68713 18.6321 9.698 18.6175 9.7047L16 
    10.9175V5.35988H18.5833C18.6054 5.35988 18.6266 5.36884 18.6423 5.38477C18.6579 5.40071 18.6667 5.42233 18.6667 5.44487V9.62736Z" fill="#525256"/>
  </IconWrapper>
);

const TargetIcon = () => (
  <IconWrapper>
    <path d="M18.9187 5.08328H18.9176L20.7772 5.45514C20.8771 5.47512 20.9592 5.54838 20.988 5.64717C21.0026 5.69516 21.0039 5.74621 20.9918 
    5.79488C20.9797 5.84354 20.9546 5.88802 20.9192 5.92357L19.3958 7.44874C19.2136 7.63075 18.9666 7.73295 18.709 7.73291H17.4464L14.2731 
    10.9087C14.3337 11.1374 14.3448 11.3763 14.3058 11.6097C14.2668 11.843 14.1785 12.0653 14.0469 12.2619C13.9152 12.4584 13.7432 12.6246 
    13.5424 12.7494C13.3415 12.8742 13.1163 12.9548 12.8819 12.9857C12.6474 13.0166 12.4091 12.9972 12.1827 12.9288C11.9564 12.8603 11.7472 
    12.7444 11.5691 12.5887C11.3911 12.4331 11.2482 12.2412 11.1501 12.026C11.0519 11.8107 11.0008 11.5771 11 11.3405C11.0002 11.0851 11.059 
    10.8331 11.172 10.6041C11.2851 10.375 11.4492 10.175 11.6518 10.0196C11.8544 9.86411 12.09 9.75733 12.3404 9.70748C12.5908 9.65762 12.8493 
    9.66604 13.0959 9.73206L16.2703 6.55517V5.29308C16.2703 5.03555 16.3724 4.78802 16.5543 4.60597L18.0788 3.0808C18.1144 3.04542 18.1588 3.02034 
    18.2075 3.00822C18.2561 2.9961 18.3071 2.9974 18.3551 3.01198C18.4539 3.04084 18.5271 3.12298 18.5471 3.22288L18.9187 5.08328Z" fill="#525256"/>
    <path d="M4.79654 12.0039C4.79777 13.0338 5.01985 14.0514 5.44777 14.9882C5.8757 15.9249 6.49953 16.759 7.27719 17.4341C8.05484 18.1093 8.96823 
    18.6098 9.95574 18.9019C10.9432 19.1939 11.9819 19.2708 13.0017 19.1273C14.0214 18.9838 14.9985 18.6233 15.8671 18.07C16.7357 17.5167 17.4755 16.7836 
    18.0367 15.92C18.5978 15.0565 18.9673 14.0826 19.1201 13.0642C19.273 12.0457 19.2056 11.0063 18.9226 10.016C18.8829 9.90033 18.8671 9.77776 18.8763
     9.65578C18.8854 9.5338 18.9193 9.41495 18.9758 9.30648C19.0323 9.19801 19.1104 9.10218 19.2051 9.02483C19.2999 8.94747 19.4094 8.89021 19.5269 
     8.85653C19.6445 8.82285 19.7677 8.81345 19.8891 8.82892C20.0104 8.84438 20.1273 8.88437 20.2327 8.94646C20.3381 9.00855 20.4297 9.09145 20.5021 
     9.19009C20.5744 9.28874 20.6259 9.40107 20.6534 9.52026C21.2014 11.4379 21.0973 13.4832 20.3575 15.3353C19.6177 17.1875 18.284 18.7416 16.5658 
     19.7538C14.8475 20.7661 12.8418 21.1793 10.8634 20.9285C8.88499 20.6778 7.04579 19.7773 5.63434 18.3683C4.22442 16.9571 3.32305 15.1175 3.07175 
     13.1385C2.82044 11.1594 3.23343 9.15295 4.24588 7.43406C5.25833 5.71517 6.8129 4.38122 8.66551 3.64163C10.5181 2.90204 12.5639 2.79871 14.4816
      3.34785C14.7099 3.4146 14.9026 3.56904 15.0174 3.77741C15.1322 3.98578 15.1599 4.23113 15.0944 4.45986C15.0289 4.68858 14.8755 4.88208 14.6678
       4.99806C14.4601 5.11404 14.2149 5.14307 13.9859 5.07881C12.9135 4.77111 11.7844 4.71673 10.6874 4.91996C9.59045 5.12318 
    8.5557 5.57847 7.66472 6.24991C6.77373 6.92135 6.05088 7.7906 5.55315 8.78912C5.05541 9.78764 4.79641 10.8881 4.79654 12.0039Z" fill="#525256"/>
    <path d="M8.6672 11.9997C8.66726 12.607 8.83314 13.2028 9.14693 13.7228C9.46073 14.2428 9.91053 14.6672 10.4478 14.9503C10.9851 15.2334 11.5895 
    15.3645 12.1958 15.3293C12.8021 15.2941 13.3873 15.0941 13.8883 14.7508C14.3892 14.4066 14.7864 13.9321 15.0371 13.3784C15.2878 12.8248 15.3823 
    12.2132 15.3105 11.6097C15.2911 11.4633 15.3111 11.3143 15.3684 11.1781C15.4256 11.042 15.5182 10.9235 15.6365 10.835C15.7547 10.7465 15.8945 
    10.6911 16.0413 10.6746C16.1881 10.658 16.3366 10.6809 16.4716 10.7408C16.6066 10.8 16.7235 10.8939 16.8104 11.0129C16.8972 11.132 16.951 11.272 
    16.9661 11.4186C17.0868 12.4498 16.8835 13.493 16.3844 14.4035C15.8853 15.3139 15.1152 16.0464 14.1809 16.4993C13.2466 16.9522 12.1945 17.103 11.1706
     16.9307C10.1468 16.7585 9.20188 16.2718 8.46716 15.5382C7.73243 14.8046 7.24431 13.8605 7.07053 12.8369C6.89676 11.8132 7.04595 10.7609 7.4974
      9.82593C7.94886 8.89095 8.68017 8.1197 9.58986 7.61923C10.4995 7.11876 11.5425 6.91388 12.5739 7.03305C12.6843 7.04329 12.7916 7.07548 12.8894 
      7.12773C12.9873 7.17998 13.0737 7.25123 13.1436 7.33731C13.2136 7.42339 13.2656 7.52256 13.2967 7.62902C13.3279 7.73548 13.3374 7.84708 13.3248
       7.95728C13.3123 8.06748 13.2778 8.17406 13.2235 8.27077C13.1692 8.36749 13.0962 8.45239 13.0086 8.5205C12.9211 8.58861 12.8208 8.63857 12.7137 
       8.66743C12.6067 8.6963 12.4949 8.70349 12.385 8.6886C11.9179 8.63437 11.4447 8.67956 10.9963 8.82121C10.548 8.96285 10.1347 9.19775 9.78358 
       9.51046C9.43246 9.82317 9.15147 10.2066 8.95907 10.6356C8.76666 11.0647 8.66719 11.5295 8.6672 11.9997Z" fill="#525256"/>
  </IconWrapper>
);

export const Icon = {
  Overview: OverviewIcon,
  Balance: BalanceIcon,
  Transaction: TransactionIcon,
  Bill: BillIcon,
  Expenses: ExpensesIcon,
  Goals: GoalsIcon,
  Settings: SettingsIcon,
  Logout: LogoutIcon,
  KebabMenu: KebabMenuIcon,
  Game: GameIcon,
  Shopping: ShoppingIcon,
  Food: FoodIcon,
  Transportation: TransportationIcon, 
  Others: OthersIcon,
  Entertaiment: EntertaimentIcon,
  Housing: HousingIcon,
  ArrowUp: ArrowUpIcon, 
  ArrowDown: ArrowDownIcon,
  ArrowRight: ArrowRightIcon,
  Edit: EditIcon,
  Award: AwardIcon,
  Target: TargetIcon,
};
