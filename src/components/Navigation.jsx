import { TbBulb } from 'react-icons/tb'


export default function Header( { onClick }) {
    return(
        <div className="flex justify-between shadow  p-2">
          <h1 className='ml-10 text-2xl'>Where in the world?</h1>
          <button className='flex gap-2 ml-10' onClick={onClick}><span className='mt-1'><TbBulb /></span> Dark mode</button>
        </div>
    )
}

