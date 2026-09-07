import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import SectionTitle from '../components/SectionTitle';
import CollectionCard from '../components/CollectionCard';
import { products } from '../data/products';
import hero from '../assets/images/hero-watch.webp';
import chronograph from '../assets/images/collection-chronograph.webp';
import diver from '../assets/images/collection-diver.webp';
import heritage from '../assets/images/collection-heritage.webp';
export default function Home(){return <><section className="hero"><img src={hero} alt="VELARO watch in a dark atelier"/><div className="hero-vignette"/><div className="hero-content"><div className="section-label"><span className="section-label__mark"/>New collection / 2026</div><h1>Time, reduced<br/><em>to its essential form.</em></h1><p>Mechanical watches for a life lived with intention. Built in small numbers, worn for the long arc.</p><div className="hero-actions"><Link href="/collection" className="button button--brass">Explore the collection <ArrowUpRight size={16}/></Link><a href="#house" className="quiet-link">Our point of view <ArrowDownRight size={16}/></a></div></div></section><section className="manifesto section-pad" id="house"><div className="container manifesto-grid"><SectionTitle label="01 / The house"/><div><p className="display-copy">The value of a watch is not measured in seconds. It is measured in the moments it keeps.</p><Link href="/collection" className="text-button">Enter the atelier <ArrowRight size={14}/></Link></div></div></section><section className="section-pad collection-preview"><div className="container"><div className="section-heading"><SectionTitle label="02 / The edit"><h2>Selected <em>pieces</em></h2></SectionTitle><Link href="/collection" className="text-button">View all watches <ArrowRight size={14}/></Link></div><ProductGrid products={products.slice(0,3)}/></div></section><section className="collection-strip"><div className="container collection-strip__grid"><CollectionCard title="Chronograph" image={chronograph}/><CollectionCard title="Diver" image={diver}/><CollectionCard title="Heritage" image={heritage}/></div></section><Newsletter/></>}
