import { Trash2 } from 'lucide-react';
import { money } from '../data/products';
import useCart from '../hooks/useCart';
import QuantitySelector from './QuantitySelector';
export default function CartItem({item}){const {updateQuantity,removeFromCart}=useCart();return <div className="cart-item"><img src={item.image} alt={item.name}/><div className="cart-item__copy"><span className="eyebrow">{item.collection}</span><h3>{item.name}</h3><span>{money(item.price)}</span><div className="cart-item__actions"><QuantitySelector value={item.quantity} onChange={(value)=>updateQuantity(item.id,value)}/><button className="remove-button" onClick={()=>removeFromCart(item.id)}><Trash2 size={14}/> Remove</button></div></div></div>}
