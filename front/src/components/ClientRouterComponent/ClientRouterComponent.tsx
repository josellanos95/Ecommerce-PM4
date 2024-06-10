"use client";
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ClientRouterComponent = ({ error }: { error: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBackToHome = () => {
    if (isMounted) {
      router.push('/');
    }
  }

  if (!isMounted) {
    return null; // O puedes mostrar un mensaje de carga mientras se monta el componente
  }

  return (
    <div>
      <p>Ha ocurrido un error: {error}</p>
      <button onClick={handleBackToHome}>Regresar al inicio</button>
    </div>
  );
};

export default ClientRouterComponent;