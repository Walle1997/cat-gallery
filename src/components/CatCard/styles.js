import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

export const CatImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
`;

export const CatInfo = styled.div`
  padding: 1rem;
  text-align: center;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
  }
`;