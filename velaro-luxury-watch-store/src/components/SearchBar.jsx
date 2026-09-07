import { Search } from 'lucide-react';
export default function SearchBar({value,onChange}){return <label className="search-field"><Search size={15}/><input value={value} onChange={onChange} placeholder="Search references" /></label>}
