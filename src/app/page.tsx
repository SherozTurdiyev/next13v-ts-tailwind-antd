import { Popover } from 'antd'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className='container'>
        <Popover placement="bottomRight" title={"text"} content={"content"}>
          <h1 className='inline-block text-blue-600 font-bold text-3xl'>Next Template</h1>
        </Popover>
      </div>

    </main>
  )
}
