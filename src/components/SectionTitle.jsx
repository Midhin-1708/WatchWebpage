export default function SectionTitle({ label, children }) {
  return (
    <div>
      <div className="section-label">
        <span className="section-label__mark" />
        {label}
      </div>

      {children && (
        <h2 className="section-title">
          {children}
        </h2>
      )}
    </div>
  )
}