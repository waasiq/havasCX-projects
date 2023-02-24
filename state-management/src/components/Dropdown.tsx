import { Menu } from '@headlessui/react'

interface DropdownInterface  {
    id: number
    duration: number
    author: string
}

const  Dropdown: React.FC<DropdownInterface> = (props) => {
  const { id, duration, author } = props

  return (
    <Menu>
      <Menu.Button>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me </div>
      </Menu.Button>

      <Menu.Items>
        <Menu.Item>
            <div className="block px-4 py-2 text-sm text-white">
                {id}
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="block px-4 py-2 text-m text-white">
                {duration}
            </div>
        </Menu.Item>
        <Menu.Item>
            <div className="block px-4 py-2 text-sm text-white">
                {author}
            </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown;