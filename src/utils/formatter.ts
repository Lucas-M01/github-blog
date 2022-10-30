import { formatDistance } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function relativeDateFormatter(date: any) {
  return formatDistance(new Date(date), new Date(), { addSuffix: true, locale: ptBR })
}