import categoriesMegaMenu from "./categoriesMegaMenu"; // MEGAMENU DATA

const megaMenus = [
  [
    {
      title: "User Account",
      child: [
        {
          title: "Order List",
          url: "/orders",
        },
        {
          title: "Order Details",
          url: "/orders/5452423",
        },
        {
          title: "View Profile",
          url: "/profile",
        },
        {
          title: "Edit Profile",
          url: "/profile/edit",
        },
        {
          title: "Address List",
          url: "/address",
        },
        {
          title: "Add Address",
          url: "/address/512474",
        },
        {
          title: "All tickets",
          url: "/support-tickets",
        },
        {
          title: "Ticket details",
          url: "/support-tickets/512474",
        },
        {
          title: "Wishlist",
          url: "/wish-list",
        },
      ],
    },
  ],
  [
    {
      // For Vendor Only not visible for user
      title: "Vendor Account",
      child: [
        {
          title: "Dashboard",
          url: "/vendor/dashboard",
        },
        {
          title: "Profile",
          url: "/vendor/account-setting",
        },
      ],
    },
    // Till here
    {
      title: "Products",
      child: [
        {
          title: "All products",
          url: "/admin/products",
        },
        {
          // For Vendor only
          title: "Add/Edit product",
          url: "/admin/products/248104",
        },
      ],
    },
    {
      title: "Orders",
      child: [
        {
          title: "All orders",
          url: "/admin/orders",
        },
        {
          title: "Order details",
          url: "/admin/orders/248104",
        },
      ],
    },
  ],
  [
    {
      title: "Sale Page",
      child: [
        {
          title: "Discount",
          url: "/sale-page-1",
        },
        {
          title: "Premium Discount",
          url: "/sale-page-2",
        },
      ],
    },
    {
      title: "Shop",
      child: [
        {
          title: "Search product",
          url: "/product/search/mobile phone",
        },
        {
          title: "Single product",
          url: "/product/34324321",
        },
        {
          title: "Cart",
          url: "/cart",
        },
        {
          title: "Checkout",
          url: "/checkout",
        },
        {
          title: "Alternative Checkout",
          url: "/checkout-alternative",
        },
        {
          title: "Order confirmation",
          url: "/order-confirmation",
        },
      ],
    },
  ],
]; // MAIN NAVIGATION DATA

const navbarNavigations = [
  // {
  //   title: "Home",
  //   // megaMenu: false,
  //   // megaMenuWithSub: false,
  //   // child: [
  //   //   {
  //   //     title: "Market 1",
  //   //     url: "/market-1",
  //   //   },
  //   // ],
  // },
  {
    megaMenu: true,
    megaMenuWithSub: false,
    title: "Mega Menu",
    child: megaMenus,
  },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: true,
  //   title: "Full Screen Menu",
  //   child: categoriesMegaMenu,
  // },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Pages",
    child: [
      {
        title: "Sale Page",
        child: [
          {
            title: "Discount",
            url: "/sale-page-1",
          },
          {
            title: "Premium Discount",
            url: "/sale-page-2",
          },
        ],
      },
      // No need of this as Vendor can access all this from mega menu and customers dont require it
      // {

      //   title: "Vendor",
      //   child: [
      //     {
      //       title: "All vendors",
      //       url: "/shops",
      //     },
      //     {
      //       title: "Vendor store",
      //       url: "/shops/34324",
      //     },
      //   ],
      // },
      {
        title: "Shop",
        child: [
          {
            title: "Search product",
            url: "/product/search/mobile phone",
          },
          {
            title: "Single product",
            url: "/product/34324321",
          },
          {
            title: "Cart",
            url: "/cart",
          },
          {
            title: "Checkout",
            url: "/checkout",
          },
          {
            title: "Alternative Checkout",
            url: "/checkout-alternative",
          },
          {
            title: "Order confirmation",
            url: "/order-confirmation",
          },
        ],
      },
    ],
  },
  {
    megaMenu: false,
    megaMenuWithSub: false,
    title: "User Account",
    child: [
      {
        title: "Orders",
        child: [
          {
            title: "Order List",
            url: "/orders",
          },
          {
            title: "Order Details",
            url: "/orders/5452423",
          },
        ],
      },
      {
        title: "Profile",
        child: [
          {
            title: "View Profile",
            url: "/profile",
          },
          {
            title: "Edit Profile",
            url: "/profile/edit",
          },
        ],
      },
      {
        title: "Address",
        child: [
          {
            title: "Address List",
            url: "/address",
          },
          {
            title: "Add Address",
            url: "/address/512474",
          },
        ],
      },
      {
        title: "Support tickets",
        child: [
          {
            title: "All tickets",
            url: "/support-tickets",
          },
          {
            title: "Ticket details",
            url: "/support-tickets/512474",
          },
        ],
      },
      {
        title: "Wishlist",
        url: "/wish-list",
      },
    ],
  },
  {
    // Only for Vendor
    megaMenu: false,
    megaMenuWithSub: false,
    title: "Vendor Account",
    child: [
      {
        title: "Dashboard",
        url: "/vendor/dashboard",
      },
      {
        title: "Products",
        child: [
          {
            title: "All products",
            url: "/admin/products",
          },
          {
            title: "Add/Edit product",
            url: "/admin/products/248104",
          },
        ],
      },
      {
        title: "Orders",
        child: [
          {
            title: "All orders",
            url: "/admin/orders",
          },
          {
            title: "Order details",
            url: "/admin/orders/248104",
          },
        ],
      },
      {
        title: "Profile",
        url: "/vendor/account-setting",
      },
    ],
  },
];
export default navbarNavigations;
