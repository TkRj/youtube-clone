import { Stack } from '@mui/material';
import { categories } from '../utils/constants';



const Sidebar = ({setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        key={category.name}
        style={{
          background: category.name === 'New' && '#FC1503',
          color: 'white',
        }}
        onClick={()=>{setSelectedCategory(category.name)}}
      >
        <span
          style={{
            color: category.name === 'New' ? 'white' : 'red',marginRight:"15px"
          }}
        >
          {category.icon}

        </span>
        <span style={{opacity:category.name==='New'?"1":"0.8"}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
