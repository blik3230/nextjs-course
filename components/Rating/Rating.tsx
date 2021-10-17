import cn from 'classnames';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';

export const Rating = ({
  rating,
  onChange,
  editable = typeof onChange === 'function',
}: RatingProps): JSX.Element => {
  const handleClick = (rating: RatingProps['rating']) => {
    if (editable && typeof onChange === 'function') {
      onChange(rating);
    }
  };

  return (
    <div
      className={cn(styles.rating, {
        [styles.editable]: editable,
      })}
    >
      {new Array(5).fill(null).map((_, index) => (
        <StarIcon
          key={index}
          onClick={() => handleClick((5 - index) as RatingProps['rating'])}
          className={cn(styles.item, {
            [styles.active]: rating === 5 - index,
          })}
        />
      ))}
    </div>
  );
};
