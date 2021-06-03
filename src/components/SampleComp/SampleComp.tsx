export interface ISampleCompProps {}

const SampleComp = ({}: ISampleCompProps) => {
  return (
    <div>
      <div>Hello, This is SampleComp component!</div>
      <div className='text-base leading-full text antialiased'>
        Hello, This is SampleComp component!
      </div>
      <div className='text-base leading-full text subpixel-antialiased'>
        Hello, This is SampleComp component!
      </div>
    </div>
  )
}

export default SampleComp
