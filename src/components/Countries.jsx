import data from '../data.json'


export default function Countries() {



    return(
        <div>
            <main className=" lg:grid lg:grid-cols-4">
        { data.map((item) => <section>
          <div className='w-[250px] h-[250px] m-10 shadow countries text-sm'>
            <img src={item.flags.png} className='w-[350px] h-[130px]' alt='country flags' />
            <section className='ml-5 mt-5'><p className='font-bold'>{item.name}</p>
            <p>{item.population}</p>
            <p>{item.region}</p>
            <p>{item.capital}</p></section>
          </div>
        </section>)}
        </main>
        </div>
    )
}