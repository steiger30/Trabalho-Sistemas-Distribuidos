
export default function C_LoginCard({ title, children }) {
  return (
    <div className='max-w-xs w-full bg-black flex gap-10 items-center flex-col overflow-hidden rounded shadow-lg m-3 p-10' >
      <h2 >{title}</h2>
      {children}
    </div>
  )
}