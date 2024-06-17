// components/ThemeToggle.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  transition: color 0.3s;
`;

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <ToggleButton onClick={toggleTheme}>
            {theme === 'light' ? (
                <FontAwesomeIcon icon={faMoon} />
            ) : (
                <FontAwesomeIcon icon={faSun} />
            )}
        </ToggleButton>
    );
};

export default ThemeToggle;
