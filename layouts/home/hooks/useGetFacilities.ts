import { credit_card, headphones, indian_rupee, truck } from "@/public/assets/icons"

export const useGetFacilities = () => {
    const facilitiesData = [
        {
            title: 'Free Shipping',
            description: 'Above all Orders over 200rs.',
            logo: truck
        },
        {
            title: 'Money Guarantee',
            description: '45 Days for Exchange',
            logo: indian_rupee
        },
        {
            title: 'Online Support',
            description: '24/7 Customer Care',
            logo: headphones
        },
        {
            title: 'Flexible Payment',
            description: 'Pay with multiple Credit Card',
            logo: credit_card
        }
    ]
    return {
        facilitiesData
    }
}

