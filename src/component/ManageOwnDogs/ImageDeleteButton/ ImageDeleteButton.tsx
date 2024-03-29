import styled from "styled-components"

const Button = styled.div`
    position: absolute;
    top: -16px;
    right: -12px;
    cursor: pointer;
`

interface IProps {
    onClick: () => void
}

const  ImageDeleteButton = ({onClick}: IProps) => {
  return (
    <Button onClick={onClick}>
        <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="36" height="36" rx="18" fill="black" />
                      <rect
                        x="23.6567"
                        y="10.2227"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(45 23.6567 10.2227)"
                        fill="white"
                      />
                      <rect
                        x="25.7783"
                        y="23.6602"
                        width="3"
                        height="19"
                        rx="1.5"
                        transform="rotate(135 25.7783 23.6602)"
                        fill="white"
                      />
                    </svg>
    </Button>
  )
}

export default  ImageDeleteButton