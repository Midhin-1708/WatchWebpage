import { Link } from 'wouter';
export default function CollectionCard({title,image,href='/collection'}){return <Link href={href} className="collection-card"><img src={image} alt=""/><span>{title}</span></Link>}
