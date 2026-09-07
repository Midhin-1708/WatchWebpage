import { ArrowRight,ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import useCart from '../hooks/useCart';
import { money } from '../data/products';
export default function ProductCard({product,index=0}){const {addToCart}=useCart();return <article className="product-card"><Link href={`/watch/${product.id}`} className="product-image-wrap"><img src={product.image} alt={product.name}/><span className="product-index">0{index+1}</span><span className="product-view">View piece <ArrowUpRight size={14}/></span></Link><div className="product-card__meta"><div><span className="eyebrow">{product.collection}</span><h3>{product.name}</h3></div><span className="product-price">{money(product.price)}</span></div><button className="text-button" onClick={()=>addToCart(product)}>Add to bag <ArrowRight size={14}/></button></article>}
