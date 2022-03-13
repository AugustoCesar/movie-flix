import { AxiosRequestConfig } from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';

import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: `/reviews`,
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        console.log('Sucesso ao salvar', response);
      })
      .catch((error) => {
        console.log('Erro ao salvar', error);
      });
  };

  return (
    <div>
      <div className="base-card review-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div >
            <input className="base-input"
              {...register('text', {
                required: 'Campo obrigatório',
              })}
              type="text"
              placeholder="Deixe sua avaliação aqui"
              name="text"
            />
            <div className="invalid-feedback d-block">
              {errors.text?.message}
            </div>
          </div>
          <div className="review-submit">
            <ButtonIcon text="Salvar Avaliação" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
