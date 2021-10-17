export interface RatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
  onChange?: (rating: RatingProps['rating']) => void;
  editable?: boolean;
}
