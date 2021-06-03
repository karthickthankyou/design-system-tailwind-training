export interface ILetterSpacingProps {}

const LetterSpacing = ({}: ILetterSpacingProps) => {
  return (
    <div className='text-gray-900'>
      <h1 className='text-xl font-extra-bold capitalize tracking-tight'>
        Bigger text needs tighter letter spacing.
      </h1>
      <p className='text-sm text-blue-600'>Karthick ragavendran</p>
      <p className='text-xs text-gray-600'>13 Jun 2021</p>
      <p className='text-gray-600'>
        When we use the same font that is meant to be used as body copy, reduce
        the letter spacing to make it look good as title.
      </p>
      <h2 className='text-lg font-extra-bold uppercase tracking-wide'>
        Full caps with wider letter spacing
      </h2>
      <p className='text-gray-600'>
        Liberal letter spacing makes full caps is easier to read.
      </p>
      <h2 className='text-lg font-extra-bold uppercase tracking-tight'>
        Full caps with tighter letter spacing
      </h2>
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

export default LetterSpacing
