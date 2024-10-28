import { StatsDataTypes } from "@/types"

export const useGetSellingStats = () => {
    const statsData: StatsDataTypes[] = [
        {
            title: 'Happy Customer',
            data: '95%'
        },
        {
            title: 'Yearly Sale',
            data: '1 Million+'
        },
        {
            title: 'Customer Rating',
            data: '20k+'
        }
    ]
    return {
        statsData
    }
}

