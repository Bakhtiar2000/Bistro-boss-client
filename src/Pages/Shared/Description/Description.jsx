import './Description.css'

const Description = () => {
    return (
        <div className='desc bg-fixed h-[572px] text-center my-10 flex items-center justify-center'>
            <div className='bg-white h-1/2 w-3/4 py-10 md:px-30 px-10 rounded flex flex-col justify-center'>
                <h3 className='text-4xl font-semibold mb-6'>Hungry Duck</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Description;