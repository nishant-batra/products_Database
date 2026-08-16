import React from 'react';


  
  const Navbar = (props)=> {
    return (
    <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTc0LjY2NyIgeDI9IjE3NC42NjciIHkxPSIzMCIgeTI9IjQzOC4wNzgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZWZkMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwYWNlYSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMzcyLjc4NiIgeDI9IjM3Mi43ODYiIHhsaW5rOmhyZWY9IiNhIiB5MT0iMzAiIHkyPSI0MzguMDc4Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMjU2IiB4Mj0iMjU2IiB4bGluazpocmVmPSIjYSIgeTE9IjMwIiB5Mj0iNDM4LjA3OCIvPjxwYXRoIGQ9Im0xNzQuNjY3IDM4MC43NzJhNDYuNSA0Ni41IDAgMSAwIDQ2LjUgNDYuNSA0Ni41NDkgNDYuNTQ5IDAgMCAwIC00Ni41LTQ2LjV6bTAgNzIuOTkyYTI2LjUgMjYuNSAwIDEgMSAyNi41LTI2LjUgMjYuNTI2IDI2LjUyNiAwIDAgMSAtMjYuNSAyNi41eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im0zNzIuNzg2IDM4MC43NzJhNDYuNSA0Ni41IDAgMSAwIDQ2LjUgNDYuNSA0Ni41NDkgNDYuNTQ5IDAgMCAwIC00Ni41LTQ2LjV6bTAgNzIuOTkyYTI2LjUgMjYuNSAwIDEgMSAyNi41LTI2LjUgMjYuNTI2IDI2LjUyNiAwIDAgMSAtMjYuNSAyNi41eiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Im00NzAuNDMzIDEwMy40MDctMzQwLjA4MS01LjEzNi05LjMyOS0yOC4yNzFhNDYuNTQyIDQ2LjU0MiAwIDAgMCAtNDQuMTY0LTMyaC0zNS4xNGExMCAxMCAwIDEgMCAwIDIwaDM1LjE0YTI2LjU3OCAyNi41NzggMCAwIDEgMjUuMTc5IDE4LjI4OWwxMS43ODEgMzUuNjExIDU0LjM1OSAxNjQuMjgtNC45IDExLjg2NWE0Ni4yOTMgNDYuMjkzIDAgMCAwIDQyLjk4NCA2My45NTVoMjAzLjAxOWExMCAxMCAwIDAgMCAwLTIwaC0yMDMuMDE5YTI2LjMxMiAyNi4zMTIgMCAwIDEgLTI0LjQ5LTM2LjM4NGwzLjg0NC05LjI3MiAyMTkuNzMzLTIyLjVhNTcgNTcgMCAwIDAgNDkuNTgtNDMuMzc2bDI1LjA3OC0xMDQuNzM4YTEwIDEwIDAgMCAwIC05LjU3NC0xMi4zMjN6bS0zNC45NTUgMTEyLjQxNWEzNi45ODggMzYuOTg4IDAgMCAxIC0zMi4xNjkgMjguMTQ0bC0yMTcuMzY1IDIyLjI3NC00OC45MzYtMTQ3Ljg2NiAzMjAuNjQxIDQuODQzeiIgZmlsbD0idXJsKCNjKSIvPjwvc3ZnPgo="
            alt="cart-item" 
            style={styles.cartIcon}/>
            <span style={styles.cartCount}>{props.count}</span>
        </div>
    </div>
    );


  }

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20,
      marginTop:20,
      color: 'white'
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '100%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      
      
    }
  };

export default Navbar;