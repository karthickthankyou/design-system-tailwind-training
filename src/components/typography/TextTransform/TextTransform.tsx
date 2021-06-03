export interface ITextTransformProps {}

const TextTransform = ({}: ITextTransformProps) => {
  return (
    <div className='text-gray-900'>
      <h1 className='text-xl font-extra-bold capitalize'>
        About text transform
      </h1>
      <p className='text-sm text-blue-600'>Karthick ragavendran</p>
      <p className='text-xs text-gray-600'>13 Jun 2021</p>
      <p className='text-gray-600'>
        Another variety provider. Look at the badges below!
      </p>
      <h2 className='text-lg font-extra-bold uppercase'>
        Full caps is hard to read
      </h2>
      <p className='text-gray-600'>
        As all the characters have the same height, Full cap text needs more
        cognitive juice to read by differentiating between letters.
      </p>
      <h2 className='text-lg font-extra-bold uppercase'>Another heading</h2>
      <p className='text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        consequatur repellendus aliquam ipsam, quod fugiat dignissimos facilis
        aut vitae, nobis beatae officiis perspiciatis? Voluptates repellat
        officia facilis qui, mollitia numquam nobis molestiae vero soluta eum
        sunt cumque quaerat ullam ex dicta consequuntur totam rerum? Debitis
        doloribus nobis autem magnam, corrupti in et architecto ex iure saepe
        officia iste eius sint.
      </p>
      <p>
        <span className='px-2 text-xs uppercase py-1 rounded-sm inline-block bg-gray-50 mr-2'>
          UX
        </span>
        <span className='px-2 text-xs uppercase py-1 rounded-sm inline-block bg-gray-50 mr-2'>
          Hierarchy
        </span>
        <span className='px-2 text-xs uppercase py-1 rounded-sm inline-block bg-gray-50 mr-2'>
          Design System
        </span>
      </p>
    </div>
  )
}

export default TextTransform
