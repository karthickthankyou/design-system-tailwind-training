export interface IFontSizeLineHeightProps {}

const FontSizeLineHeight = ({}: IFontSizeLineHeightProps) => {
  return (
    <div>
      <h1 className='text-xl'>Font size and line height</h1>
      <p>
        Enable 8px soft grid and see the lines maintain the vertical rythm
        beautifully.
      </p>
      <h2 className='text-lg'>Fonts as lego pieces</h2>
      <p>
        All line heights associated with the text-{} are given appropriate line
        heights and hence they <em>fit</em> our 8px grid well.
      </p>
      <h2 className='text-lg'>Another heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        consequatur repellendus aliquam ipsam, quod fugiat dignissimos facilis
        aut vitae, nobis beatae officiis perspiciatis? Voluptates repellat
        officia facilis qui, mollitia numquam nobis molestiae vero soluta eum
        sunt cumque quaerat ullam ex dicta consequuntur totam rerum? Debitis
        doloribus nobis autem magnam, corrupti in et architecto ex iure saepe
        officia iste eius sint.
      </p>
      <p className='text-sm'>Karthick ragavendran</p>
      <p className='text-xs'>13 Jun 2021</p>
    </div>
  )
}

export default FontSizeLineHeight
