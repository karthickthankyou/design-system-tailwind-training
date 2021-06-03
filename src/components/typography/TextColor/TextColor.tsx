export interface ITextColorProps {}

const TextColor = ({}: ITextColorProps) => {
  return (
    <div className='text-gray-900'>
      <h1 className='text-xl font-extra-bold'>About font weight</h1>
      <p className='text-sm text-blue-600'>Karthick ragavendran</p>
      <p className='text-xs text-gray-600'>13 Jun 2021</p>
      <p className='text-gray-600'>
        Primary color has to be used sparsely like how they used red in
        schlinder's list?
      </p>
      <h2 className='text-lg font-extra-bold'>
        Gray - A tool for de-emphasising
      </h2>
      <p className='text-gray-600'>
        Eyes evade lighter shades of gray to see the darker ones.
      </p>
      <h2 className='text-lg font-extra-bold'>Another heading</h2>
      <p className='text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        consequatur repellendus aliquam ipsam, quod fugiat dignissimos facilis
        aut vitae, nobis beatae officiis perspiciatis? Voluptates repellat
        officia facilis qui, mollitia numquam nobis molestiae vero soluta eum
        sunt cumque quaerat ullam ex dicta consequuntur totam rerum? Debitis
        doloribus nobis autem magnam, corrupti in et architecto ex iure saepe
        officia iste eius sint.
      </p>
    </div>
  )
}

export default TextColor
