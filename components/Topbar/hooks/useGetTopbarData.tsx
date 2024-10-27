import { ROUTER_PATHS } from "@/constants/enums";
import { arrow_head_down, search, shopping_cart, shopping_cart_white, user_circle } from "@/public/assets/icons";
import { TopbarManuLinks } from "../../../types";
import { useRouter } from "next/router";
import { topBarFeturesKeys } from "@/constants";
import { useState } from "react";
import Image from "next/image";

export const useGetTopbarData = () => {
    const router = useRouter();
    const [cartItemCount, setCartItemCount] = useState(2);

    const menuItems: TopbarManuLinks[] = [
        {
            component: 'Home',
            path: ROUTER_PATHS.home
        },
        {
            component: <span className="flex items-center gap-2">Categories
                <Image src={arrow_head_down} alt="categories" width={10} />
            </span>,
        },
        {
            component: 'Explore'
        },
        {
            component: 'About'
        },
        {
            component: 'Blog'
        },
        {
            component: 'Contact Us'
        }
    ];

    const topBarFetures: TopbarManuLinks[] = [
        {
            icon: search,
            key: topBarFeturesKeys.search

        },
        {
            icon: user_circle,
            key: topBarFeturesKeys.user
        },
        {
            icon: shopping_cart,
            activeIcon: shopping_cart_white,
            path: ROUTER_PATHS.cart,
            key: topBarFeturesKeys.shoppingCart
        }
    ]

    return {
        menuItems,
        topBarFetures,
        cartItemCount
    }
}
