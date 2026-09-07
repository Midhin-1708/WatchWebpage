import { Minus,Plus } from 'lucide-react';
export default function QuantitySelector({value,onChange}){return <div className="quantity"><button onClick={()=>onChange(Math.max(1,value-1))}><Minus size={13}/></button><span>{value}</span><button onClick={()=>onChange(value+1)}><Plus size={13}/></button></div>}
