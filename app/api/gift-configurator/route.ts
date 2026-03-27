import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { products } from '../../../lib/products';
import { getSize } from '../../../lib/sizes';

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { ageMonths, gender, budget } = await request.json();

    const size = getSize(ageMonths);

    const suitable = products.filter(p =>
      p.price <= budget &&
      p.sizes.includes(size)
    );

    const productList = suitable.map(p =>
      `- ${p.name} ($${p.price}) — размер ${size}, категория: ${p.category}`
    ).join('\n');

    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: `Ты — помощник подарочного магазина детской одежды BabyShop.

Покупатель хочет подарить одежду ребёнку:
- Возраст: ${ageMonths} месяцев
- Пол: ${gender}
- Бюджет: $${budget}
- Подходящий размер одежды: ${size}

Доступные товары в бюджете:
${productList}

Выбери 1-2 лучших варианта подарка. Объясни почему именно они подойдут.
Напиши короткий текст для персональной открытки (2-3 предложения).
Отвечай на русском языке, тепло и по-человечески.`
      }]
    });

    const reply = message.content[0].type === 'text'
      ? message.content[0].text
      : '';

    return NextResponse.json({
      success: true,
      recommendation: reply,
      products: suitable
    });

  } catch (error) {
    console.error('ОШИБКА:', error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}