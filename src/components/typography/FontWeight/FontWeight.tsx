export interface IFontWeightProps {}

const FontWeight = ({}: IFontWeightProps) => {
  return (
    <div>
      <h1 className='text-xl font-extra-bold'>About font weight</h1>
      <p className='text-sm'>Karthick ragavendran</p>
      <p className='text-xs'>13 Jun 2021</p>
      <p>
        Font weight helps to emphasis the hierarchy much stronger. We enabled
        200, 400, 600, and 800 font weights to create hierarchy.
      </p>
      <h2 className='text-lg font-extra-bold'>Fonts as lego pieces</h2>
      <p>
        Font weights allows us to create hierarchy even by using the same font
        size.
      </p>
      <h2 className='text-lg font-extra-bold'>Another heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        consequatur repellendus aliquam ipsam, quod fugiat dignissimos facilis
        aut vitae, nobis beatae officiis perspiciatis? Voluptates repellat
        officia facilis qui, mollitia numquam nobis molestiae vero soluta eum
        sunt cumque quaerat ullam ex dicta consequuntur totam rerum? Debitis
        doloribus nobis autem magnam, corrupti in et architecto ex iure saepe
        officia iste eius sint.
      </p>
      <h3 className='text-xl font-thin'>
        Thin fonts have to be used sparsely! They work with larger texts.
      </h3>
    </div>
  )
}

export default FontWeight
