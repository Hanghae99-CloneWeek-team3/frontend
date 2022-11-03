import { DivDropDownBox, DivMenuBox, DivCategoryBox, DivMenuLine } from './style';
import { useState } from 'react'

export default function DropDown({children, menus, size, alignRight=false}){

  const [isOpen, setIsOpen] = useState(false);
  const keys = new Array(menus.length).fill(1).map((key, index) => key + index)
  
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = (menuFunction) => {
    menuFunction()
    setIsOpen(false)
  }
  
  return <>
  <a href="#" onClick={toggleOpen}>{children}</a>

  <DivDropDownBox isOpen={isOpen} size={size} alignRight={alignRight}>
    { menus.map((menuForder, index) => {
      const menuKeys = new Array(menuForder.menu.length).fill(1).map((key, index) => key + index);
      return <DivMenuLine style={{flexDirection: 'column'}} key={keys[index]}>{ menuForder.category ? <DivCategoryBox>{menuForder.category}</DivCategoryBox> : <div></div> }
        {menuForder.menu.map((oneMenu, index) => {
          return <a href={oneMenu.href || '#'} onClick={() => closeMenu(oneMenu.onClick)} key={menuKeys[index]}><DivMenuBox>{oneMenu.title}</DivMenuBox></a>
        })}
        </DivMenuLine>
      })
    }
  </DivDropDownBox>
  </>
}

