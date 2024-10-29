import React from 'react'
import useGetCartTableColumns from './hooks/useGetCartTableColumns'
import styles from './styles.module.css';
import Image from 'next/image';
import { delete_green, minus_gray, plus_gray } from '@/public/assets/icons';
import { Button } from '../../components';

const Cart = () => {
    const {
        cartProducts,
        demoColors,
        demoSizes,
        quantity,
        handleDecrease,
        handleIncrease,
        subtotal,
        grandTotal
    } = useGetCartTableColumns();


    return (
        <div>
            <div className={styles.headerRow}>
                <div className={styles.productDetailsCol}>Product Details</div>
                <div className={styles.headers}>Price</div>
                <div className={styles.quantiyHead}>Quantity</div>
                <div className={styles.headers}>shipping</div>
                <div className={styles.headers}>subtotal</div>
                <div className={styles.actionHead}>action</div>
            </div>
            <div className={styles.dataListing}>
                {
                    cartProducts?.map((item: any, index: number) => {
                        return (
                            <div className={styles.dataRow}>
                                {/* product details */}
                                <div className={styles.detailsCol}>
                                    <Image src={item?.image} alt='' width={105} height={120} className={styles.productImage} />
                                    <div className={styles.productInfoSection}>
                                        <div className={styles.title}>{item?.title}</div>
                                        <div className={styles.color}>Color : {demoColors[index]}</div>
                                        <div className={styles.size}>Size : {demoSizes[index]}</div>
                                    </div>
                                </div>
                                {/* price */}
                                <div className={styles.priceCol}>
                                    <span>{item?.price}</span>
                                </div>
                                {/* quantity */}
                                <div className={styles.quantiyCol}>
                                    <div className={styles.quantityHandle}>
                                        <Image src={minus_gray} alt='' width={12}
                                            onClick={() => {
                                                handleDecrease(item?.id)
                                            }} />
                                        <span className={styles.quantiyVal}>{quantity[item?.id]}</span>
                                        <Image src={plus_gray} alt='' width={12}
                                            onClick={() => {
                                                handleIncrease(item?.id)
                                            }} />
                                    </div>
                                </div>
                                {/* shipping */}
                                <div className={styles.shippingCol}>
                                    <span>FREE</span>
                                </div>
                                {/* shipping */}
                                <div className={styles.subTotalCol}>
                                    <span>{Number(subtotal[item?.id]).toFixed(2) || item?.price}</span>
                                </div>
                                {/* action */}
                                <div className={styles.actions}>
                                    <Image src={delete_green} alt='' width={28} className={styles.actions} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.billSection}>
                <div className={styles.discountCodeSection}>
                    <div className={styles.discountTextDiv}>
                        <div className={styles.discountTitle}>Discount Codes</div>
                        <div className={styles.discountSubline}>Enter your coupon code if you have one</div>
                    </div>
                    <div className={styles.codeInputDiv}>
                        <input type='text' className={styles.codeInput} />
                        <Button label={'Apply Coupon'} mainClassName={styles.applyBtn} />
                    </div>
                    <Button
                        type='secondaryBordered'
                        label={'Continue Shopping'}
                        mainClassName={styles.continueShopBtn} />
                </div>
                <div className={styles.calculationsSection}>
                    <div className={styles.billTotals}>
                        <div className={styles.billColumns}>
                            <div>Sub Total</div>
                            <div>{Number(grandTotal).toFixed(2)}</div>
                        </div>
                        <div className={styles.billColumns}>
                            <div>Shipping</div>
                            <div>0.00</div>
                        </div>
                        <div className={styles.grandBorder}>
                            ---------------------------------
                        </div>
                        <div className={styles.billColumns}>
                            <div>Grand Total</div>
                            <div>{Number(grandTotal).toFixed(2)}</div>
                        </div>
                    </div>
                    <div className={styles.checkoutDiv}>
                        <Button label={'Proceed To Checkout'} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cart
