'use client'
import React from 'react'
import '@/shoes.scss'
import Constants from '@/Constants'
import {
  Box,
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { selectedColorState, selectedMeshState } from '@/atoms/Atoms'
import { useRecoilState } from 'recoil'

export default function ColorComp() {
  const [selectedColorIdx, setSelectedColorIdx] =
    useRecoilState(selectedColorState)
  const [selectedMeshName] = useRecoilState(selectedMeshState)
  const padding = 16
  const btnWidth = 30
  const width = Constants.COLOR_ARR.length * (btnWidth + padding * 2)

  const colorClick = (color: any, idx: number) => {
    console.log('colorClick color : ', color)
    console.log('colorClick idx : ', idx)
    // setSelected(idx);
    setSelectedColorIdx(idx)
  }

  return (
    <Box className={'color-wrap'} component="div">
      <Box
        className={'color-inner-wrap'}
        style={{ width: width }}
        component="div"
      >
        <Typography className="current-part">{selectedMeshName}</Typography>
        <List className={'list-wrap'}>
          {Constants.COLOR_ARR.map((color, idx) => (
            <ListItem className="color-item pt-5" key={'color-' + idx}>
              <IconButton
                onClick={(e) => colorClick(color, idx)}
                className={
                  selectedColorIdx === idx ? 'color-btn selected' : 'color-btn'
                }
                style={{ backgroundColor: color.color }}
              ></IconButton>
              {selectedColorIdx === idx ? (
                <ListItemText className="color-name" primary={color.name} />
              ) : (
                <></>
              )}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}
