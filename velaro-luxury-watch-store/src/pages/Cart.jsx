import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import CartItem from '../components/CartItem';
import SectionTitle from '../components/SectionTitle';
import useCart from '../hooks/useCart';
import { money } from '../data/products';
export default function Cart(){const {items,subtotal}=useCart();return <section className="section-pad cart-page"><div className="container narrow-container"><div className="page-intro page-intro--small"><SectionTitle label="Your selection"/><h1>The <em>bag.</em></h1></div>{!items.length?<div className="empty-state">Your bag is waiting for its first piece.<Link href="/collection" className="button button--brass">Explore the collection <ArrowRight size={15}/></Link></div>:<div className="cart-layout"><div>{items.map(item=><CartItem key={item.id} item={item}/>)}</div><aside className="summary-card"><SectionTitle label="Order summary"/><div className="summary-total"><span>Total</span><strong>{money(subtotal)}</strong></div><Link href="/checkout" className="button button--brass button--wide">Continue to checkout <ArrowRight size={15}/></Link></aside></div>}</div></section>}
