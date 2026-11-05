import { test } from 'node:test';
import assert from 'node:assert/strict';
import { enlaceLlamada, enlaceWhatsApp, formatearTelefono } from './telefono.ts';

test('agrupa según la lada', () => {
  assert.equal(formatearTelefono('8112345678'), '81 1234 5678');
  assert.equal(formatearTelefono('5534567890'), '55 3456 7890');
  assert.equal(formatearTelefono('2225678901'), '222 567 8901');
});

test('arma enlaces con lada de México', () => {
  assert.equal(enlaceLlamada('8112345678'), 'tel:+528112345678');
  assert.equal(
    enlaceWhatsApp('8112345678', 'Hola, DT5'),
    'https://wa.me/528112345678?text=Hola%2C%20DT5',
  );
});
