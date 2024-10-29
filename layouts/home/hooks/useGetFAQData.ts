import React from 'react'

export const useGetFAQData = () => {
    const faqData = [
        {
            header: 'Lorem ipsum dolor sit amet consectetur quam ipsum aliquam tortor non nullam ?',
            body: `Lorem ipsum dolor sit amet consectetur. Nulla pellentesque vitae id molestie integer 
            viverra fermentum turpis tellus. Condimentum integer elementum euismod ultrices vulputate 
            vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque 
            facilisis at. Iaculis tellus vitae enim velit. Tortor quis in ipsum amet nam lacus.`
        },
        {
            header: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium perspiciatis',
            body: `Turpis tellus. Condimentum integer elementum euismod ultrices vulputate 
            vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque 
            facilisis at. Iaculis tellus vitae enim velit.`
        },
        {
            header: 'Condimentum integer elementum euismod ultrices vulputate',
            body: `Nulla pellentesque vitae id molestie integer 
            viverra fermentum turpis tellus. Condimentum integer elementum euismod ultrices vulputate 
            vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque 
            facilisis at. Iaculis tellus vitae enim velit. Tortor quis in ipsum amet nam lacus.`
        },
        {
            header: 'Condimentum integer elementum euismod ultrices vulputate',
            body: `Turpis tellus. Condimentum integer elementum euismod ultrices vulputate 
            vitae amet tincidunt. Sed lorem facilisis ultricies euismod in. Cras imperdiet pellentesque 
            facilisis at. Iaculis tellus vitae enim velit.`
        }
    ]
    return {
        faqData
    }
}
