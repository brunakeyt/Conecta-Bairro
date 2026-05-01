import type { Review } from '../../api/generated/models';

export const REVIEWS_BY_PROFESSIONAL: Record<string, Review[]> = {
  '1': [
    { id: 'r1', userName: 'Mariana Costa', userAvatarUrl: '', rating: 5, comment: 'O Marcos superou todas as expectativas. A reforma foi feita com extremo cuidado e atenção aos detalhes.', createdAt: '2024-01-15T10:30:00Z' },
    { id: 'r2', userName: 'Juliano Pereira', userAvatarUrl: '', rating: 5, comment: 'Profissional muito pontual e organizado. O orçamento foi cumprido à risca e o resultado final ficou impecável.', createdAt: '2024-02-20T14:45:00Z' },
    { id: 'r3', userName: 'Ricardo Fernandes', userAvatarUrl: '', rating: 4, comment: 'Excelente trabalho. Pequenos atrasos no cronograma mas o resultado final compensou.', createdAt: '2024-03-05T09:00:00Z' },
  ],
  '2': [
    { id: 'r4', userName: 'Lucas Andrade', userAvatarUrl: '', rating: 5, comment: 'Ana entregou o projeto antes do prazo com qualidade excepcional. Comunicação perfeita do início ao fim.', createdAt: '2024-01-10T11:00:00Z' },
    { id: 'r5', userName: 'Fernanda Lima', userAvatarUrl: '', rating: 5, comment: 'Profissional incrível. Resolveu problemas complexos com facilidade e foi muito didática nas explicações.', createdAt: '2024-02-28T16:20:00Z' },
  ],
  '3': [
    { id: 'r6', userName: 'Fabricio Lima', userAvatarUrl: '', rating: 5, comment: 'Carla fotografou nosso evento corporativo e o resultado foi fantástico. Todas as fotos com qualidade profissional.', createdAt: '2024-01-20T18:00:00Z' },
    { id: 'r7', userName: 'Maria Eduarda', userAvatarUrl: '', rating: 5, comment: 'Muito atenciosa e criativa. Capturou momentos únicos que não esperávamos.', createdAt: '2024-03-12T10:15:00Z' },
    { id: 'r8', userName: 'Paulo Salave', userAvatarUrl: '', rating: 4, comment: 'Trabalho muito bom. As fotos ficaram lindas para o casamento.', createdAt: '2024-04-01T14:30:00Z' },
  ],
  '4': [
    { id: 'r9', userName: 'Beatriz Santos', userAvatarUrl: '', rating: 5, comment: 'Ricardo resolveu todos os problemas elétricos da minha casa em um único dia. Super recomendo!', createdAt: '2024-02-15T08:30:00Z' },
  ],
  '5': [
    { id: 'r10', userName: 'Carolina Moraes', userAvatarUrl: '', rating: 5, comment: 'Helena transformou completamente a identidade visual da nossa empresa. Resultado profissional e moderno.', createdAt: '2024-01-25T15:00:00Z' },
  ],
};
