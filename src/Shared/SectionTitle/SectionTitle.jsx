

const SectionTitle = ({subheading,heading}) => {
    return (
        <div>
            
        <div className='text-center  mx-auto my-10'>


<h1 className='text-3xl uppercase   my-3 py-2  text-center'>{heading}</h1>
<p className='text-gray-400'>---  {subheading}  --- </p>


</div>
            
        </div>
    );
};

export default SectionTitle;