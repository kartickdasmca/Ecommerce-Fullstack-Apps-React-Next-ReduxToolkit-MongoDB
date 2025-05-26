import  { createRouter } from 'next-connect';

const router = createRouter();

router.post(async (req, res) => {
  res.status(200).json({ message: 'Signup route works!' });
});

export default router.handler();
